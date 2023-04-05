import { newsDao } from "../daos/news.dao.js";


const createNews = async (createNewsRequest) => {
  try {
    const { title, body, image, author, createdAt } = createNewsRequest;
    const existingNews = await newsDao.findNewsByFilter({ title });

    if (existingNews) {
      throw {
        message: "The news you want to create already exists",
        status: 400,
      };
    }

    const createdNews = await newsDao.createNews(createNewsRequest);

    return createdNews;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateNews = async (updateNewsRequest, id) => {
  try {
    const existingNews = await newsDao.findNewsById(id);

    if (!existingNews) {
      throw {
        message: "The news you want to update does not exist",
        status: 400,
      };
    }

    const updatedNews = await newsDao.updateNews(id, updateNewsRequest);

    return updatedNews;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteNews = async (id) => {
  try {
    const existingNews = newsDao.findNewsById(id);

    if (!existingNews) {
      throw {
        message: "The news you want to delete does not exist",
        status: 400,
      };
    }

    const deletedNews = await newsDao.deleteNews(id);

    return deletedNews;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findNewsRecord = async (newsTitle) => {
    try {
        const news = await newsDao.findNewsRecord(newsTitle)
        
        return news
    } catch (err) {
        console.log(err);
    }
}

const findAllNews = async () => {
  try {
    const teams = await newsDao.findAllNews();

    return teams;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findNewsById = async (id) => {
  try {
    const news = await newsDao.findNewsById(id);

    if (!news) {
      throw {
        message: "The news you want to look for does not exists",
        status: 404,
      };
    }

    return news;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const newsService = {
  createNews,
  updateNews,
  deleteNews,
  findAllNews,
  findNewsById,
  findNewsRecord,
};