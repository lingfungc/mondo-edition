// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CuisineHistoryController from "./cuisine_history_controller"
application.register("cuisine-history", CuisineHistoryController)

import CuisineReviewsController from "./cuisine_reviews_controller"
application.register("cuisine-reviews", CuisineReviewsController)

import DisplayTabController from "./display_tab_controller"
application.register("display-tab", DisplayTabController)

import HeartController from "./heart_controller"
application.register("heart", HeartController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import HomeNavBtnController from "./home_nav_btn_controller"
application.register("home-nav-btn", HomeNavBtnController)

import MapController from "./map_controller"
application.register("map", MapController)

import MusicPlayerController from "./music_player_controller"
application.register("music-player", MusicPlayerController)

import StarRatingController from "./star_rating_controller"
application.register("star-rating", StarRatingController)
