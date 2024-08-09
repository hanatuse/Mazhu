import Bookmark from "../models/BookmarkModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find({});
  res.status(StatusCodes.OK).json({ bookmarks });
};

export const createBookmark = async (req, res) => {
  const bookmark = await Bookmark.create(req.body);
  res.status(StatusCodes.CREATED).json({ bookmark });
};

export const getBookmark = async (req, res) => {
  const bookmark = await Bookmark.findById(req.params.id);
  res.status(StatusCodes.OK).json({ bookmark });
};

export const updateBookmark = async (req, res) => {
  const updatedBookmark = await Bookmark.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: "bookmark modified", bookmark: updatedBookmark });
};

export const deleteBookmark = async (req, res) => {
  const removeBookmark = await Bookmark.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: "bookmark deleted", bookmark: removeBookmark });
};
