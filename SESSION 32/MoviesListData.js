import { CreatingNavBar } from "./CreatingNavBar";
import {useState } from "react";

export function MoviesListData({setMode, mode}) {
  console.log(setMode)
  let moviesList = [
    {
      name: "Iron Man",
      poster:
        "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
      rating: 7.9,
      summary:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      trailer: "https://www.youtube.com/embed/8hYlB38asDY",
    },
    {
      name: "Iron Man 2",
      poster:
        "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
      rating: 7.0,
      summary:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      name: "Thor",
      poster:
        "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
      rating: 7.0,
      summary:
        "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
    },
    {
      name: "Captain America: The First Avenger",
      poster:
        "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
      rating: 6.9,
      summary:
        "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      trailer: "https://www.youtube.com/embed/JerVrbLldXw",
    },
    {
      name: "Marvel's The Avengers",
      poster:
        "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
      rating: 8.0,
      summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Iron Man 3",
      poster:
        "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
      rating: 7.1,
      summary:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      trailer: "https://www.youtube.com/embed/YLorLVa95Xo",
    },
  ];

  const [Movies, SetMovies] = useState(moviesList);
  return <CreatingNavBar Movies={Movies} SetMovies={SetMovies} setMode={setMode} mode={mode}/>;
}

