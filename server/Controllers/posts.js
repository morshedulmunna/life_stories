import PostMessage from "../Models/postMessage.js";

// Get Requeast from Client
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create Post from Client
export const createPost = async (req, res) => {
  const post = req.body;

  //Body Data going to Controller
  const newPost = new PostMessage(post);

  try {
    //
    await newPost.save();

    //
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  res.send("Post Createtion");
};
