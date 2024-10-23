import React, { useState } from "react";
import {
  FaThumbsUp,
  FaCommentAlt,
  FaHeart,
  FaEllipsisH,
  FaExpand,
} from "react-icons/fa"; // Icons for interactions

const Newsfeed = () => {
  const initialPosts = [
    {
      id: 1,
      user: "Raf Adamson-Brown",
      image: "https://randomuser.me/api/portraits/men/7.jpg", // Replace with actual image URL
      content:
        "Just started a new project. Excited to see where this goes! Hoping to get feedback from the team soon.",
      time: "3 days ago",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false,
    },
    {
      id: 2,
      user: "Sigfrid",
      image: "https://randomuser.me/api/portraits/women/8.jpg", // Replace with actual image URL
      content:
        "I love collaborating with such a talented team! Lorem ipsum odor amet, consectetuer adipiscing elit",
      time: "5 hours ago",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false, // For expanding the story content
    },
    {
      id: 3,
      user: "Cato",
      image: "https://randomuser.me/api/portraits/men/9.jpg", // Replace with actual image URL
      content:
        "Looking forward to the next challenge! Lorem ipsum odor amet, consectetuer adipiscing elit",
      time: "1 day ago",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false, // For expanding the story content
    },
    {
      id: 4,
      user: "John",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image URL
      content:
        "Great time working with this team! Lorem ipsum odor amet, consectetuer adipiscing elit",
      time: "2 days ago",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false,
    },
    {
      id: 5,
      user: "Anna",
      image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual image URL
      content:
        "Excited about the new project milestones we achieved! Lorem ipsum odor amet, consectetuer adipiscing elit",
      time: "1 day ago",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [visiblePosts, setVisiblePosts] = useState(2); // Initially display 2 posts

  const [newPostContent, setNewPostContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [commentInputs, setCommentInputs] = useState({});

  // Restricted words list for validation
  const restrictedWords = ["badword1", "badword2", "inappropriate"];

  // Function to handle validations and post submission
  const handlePostSubmit = () => {
    const trimmedContent = newPostContent.trim();

    // Validation: Check for minimum characters
    if (trimmedContent.length < 3) {
      setError("Post content must be at least 3 characters long.");
      setSuccess("");
      return;
    }

    // Validation: Check for maximum character limit
    if (trimmedContent.length > 300) {
      setError("Post content cannot exceed 300 characters.");
      setSuccess("");
      return;
    }

    // Validation: Check for restricted words
    for (let word of restrictedWords) {
      if (trimmedContent.toLowerCase().includes(word)) {
        setError(`Post contains restricted words: "${word}"`);
        setSuccess("");
        return;
      }
    }

    // If all validations pass, submit the post
    setError("");
    setSuccess("Your post has been successfully submitted!");

    const newPost = {
      id: posts.length + 1,
      user: "You",
      image: "https://via.placeholder.com/50", // Replace with your user image
      content: newPostContent,
      time: "Just now",
      liked: false,
      favorited: false,
      comments: [],
      expanded: false,
    };
    setPosts([newPost, ...posts]);
    setNewPostContent(""); // Clear input after submission
  };

  // Toggle the like status of a post
  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  // Toggle the favorite status of a post
  const toggleFavorite = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, favorited: !post.favorited } : post
      )
    );
  };

  // Handle comment input for each post
  const handleCommentChange = (postId, comment) => {
    setCommentInputs({ ...commentInputs, [postId]: comment });
  };

  // Submit a comment for a post
  const submitComment = (postId) => {
    const comment = commentInputs[postId]?.trim();
    if (comment && comment.length > 0) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
      setCommentInputs({ ...commentInputs, [postId]: "" }); // Clear comment input after submission
    }
  };

  // Toggle expand/collapse story
  const toggleExpandStory = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, expanded: !post.expanded } : post
      )
    );
  };

  // Handle load more functionality
  const loadMorePosts = () => {
    // Increase the number of visible posts by 2 each time the button is clicked
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2);
  };

  return (
    <div className="w-full bg-white border rounded-lg shadow-sm p-4">
      {/* Textarea and Post Button */}
      <div className="mb-6">
        <div class="flex  ">
          <div class="w-3/4">
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className=" p-2 w-full bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:bg-white"
              placeholder="Write your story here..."
              rows="1"
            />
          </div>

          <div class="w-1/4">
            <button
              onClick={handlePostSubmit}
              className="ml-4 bg-blue-500 text-white py-2 px-3 text-sm rounded hover:bg-blue-600 transition"
            >
              Post Story
            </button>
          </div>
        </div>
        <div class="w-full">
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
        </div>
      </div>

      {/* Newsfeed Section */}
      <h2 className="text-lg font-bold mb-4">Newsfeed</h2>

      {posts.slice(0, visiblePosts).map((post) => (
        <div
          key={post.id}
          className="bg-gray-100 rounded-lg p-4 mb-4 shadow-sm"
        >
          {/* Post Header */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                src={post.image}
                alt={post.user}
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">{post.user}</p>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>
            <FaEllipsisH className="text-gray-500" />
          </div>

          {/* Post Content (Expanded/Collapsed) */}
          <p className="text-gray-700 mb-3">
            {post.expanded || post.content.length <= 50
              ? post.content
              : `${post.content.substring(0, 50)}...`}
          </p>

          {/* Expand Story Button */}
          {post.content.length > 50 && (
            <button
              onClick={() => toggleExpandStory(post.id)}
              className="mt-3 bg-green-500 text-white py-1 text-sm px-3 rounded hover:bg-green-600 transition0"
            >
              {post.expanded ? "Collapse Story" : "Expand Story"}{" "}
            </button>
          )}

          {/* Post Interactions */}
          <div className="flex space-x-4 text-gray-600 mt-3">
            {/* Like Button */}
            <button
              className={`flex items-center text-sm space-x-1 ${
                post.liked ? "text-blue-500" : "hover:text-blue-500"
              }`}
              onClick={() => toggleLike(post.id)}
            >
              <FaThumbsUp /> <span>{post.liked ? "Liked" : "Like"}</span>
            </button>

            {/* Comment Button */}
            <button className="flex items-center text-sm space-x-1 hover:text-blue-500">
              <FaCommentAlt /> <span>Comment</span>
            </button>

            {/* Favorite Button */}
            <button
              className={`flex items-center text-sm space-x-1 ${
                post.favorited ? "text-red-500" : "hover:text-red-500"
              }`}
              onClick={() => toggleFavorite(post.id)}
            >
              <FaHeart />{" "}
              <span>{post.favorited ? "Favorited" : "Favorite"}</span>
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-4 flex">
            <input
              type="text"
              className="w-3/4 p-2 bg-gray-200 rounded-lg shadow-sm"
              placeholder="Write a comment..."
              value={commentInputs[post.id] || ""}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
            />

            <button
              onClick={() => submitComment(post.id)}
              className="ml-4  bg-red-500 text-white py-1 text-sm px-3 rounded hover:bg-red-600 transition"
            >
              Post
            </button>

            {/* Display Comments */}
            {post.comments.length > 0 && (
              <div className="mt-3">
                {post.comments.map((comment, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {comment}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center">
        {visiblePosts < posts.length && (
          <button
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
            onClick={loadMorePosts}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
