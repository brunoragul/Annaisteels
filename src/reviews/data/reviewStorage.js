// src/reviews/data/reviewStorage.js

const STORAGE_KEY = "userReviews";

export function getReviews() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // Return the last 6 reviews (latest at the end)
  return data.slice(-6).reverse(); // reverse so newest appears first
}

export function addReview(newReview) {
  const reviews = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedReviews = [...reviews, newReview];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
}

