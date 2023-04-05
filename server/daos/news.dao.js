import News from "../models/news.js";

const createNews = async (createNewsRequest) => {
    try {
      const createdNews = await News.create(createNewsRequest);
  
      return createdNews;
    } catch (err) {
      console.log(err);
    }
  };
  
  const updateNews = async (id, updateNewsRequest) => {
    try {
      const updatedNews = await News.updateOne({ _id: id }, updateNewsRequest);
  
      return updatedNews;
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteNews = async (id) => {
    try {
      const deletedNews = await News.deleteOne({ _id: id });
  
      return deletedNews;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findAllNews = async () => {
    try {
      const news = await News.find();
  
      return news;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findNewsById = async (id) => {
    try {
      const news = await News.findById(id);
  
      return news;
    } catch (err) {
      console.log(err);
    }
  };
  
  const findNewsByFilter = async (filters) => {
    try {
      const news = await News.findOne(filters);
  
      return news;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const newsDao = {
    createNews,
    updateNews,
    deleteNews,
    findAllNews,
    findNewsById,
    findNewsByFilter,
  };

