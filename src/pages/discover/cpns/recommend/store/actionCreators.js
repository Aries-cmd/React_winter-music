import * as actionType from "./constants"

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from "@/services/recommends"


// top-banners
const changeTopBannersAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannersAction(res))
    })
  }
}


// hot-Recommend
const changeHotRecommendsAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})
export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      console.log(res.result);
      dispatch(changeHotRecommendsAction(res))
    })
  }
}



// new-album 
const changeNewAlbumAction = (res) => ({
  type: actionType.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}


// recommend-ranking
const changeUpRankingAction = (res) => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})
export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      console.log(res);
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  }
}