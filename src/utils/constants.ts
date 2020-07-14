export type AnimationEffect =
  | 'CLICK_PLAY_AND_BACKWARDS'
  | 'HOVER_PLAY_AND_STOP'
  | 'HOVER_PLAY_AND_BACKWARDS'
  | 'CLICK_PLAY'
  | 'LOOP_PLAY'
  | 'CLICK_PLAY_AND_SEGMENTS';

export type Animation = {
  animationData: any;
  animationKey: AnimationKey;
};

export type AnimationKey =
  | 'activity'
  | 'airplay'
  | 'alertCircle'
  | 'alertOctagon'
  | 'alertTriangle'
  | 'archive'
  | 'arrowDown'
  | 'arrowDownCircle'
  | 'arrowLeftCircle'
  | 'arrowRightCircle'
  | 'arrowUp'
  | 'arrowUpCircle'
  | 'bookmark'
  | 'calendar'
  | 'checkBox'
  | 'codepen'
  | 'copy'
  | 'download'
  | 'edit'
  | 'explore'
  | 'facebook'
  | 'github'
  | 'heart'
  | 'infinity'
  | 'info'
  | 'instagram'
  | 'linkedin'
  | 'loading'
  | 'loading2'
  | 'loading3'
  | 'lock'
  | 'mail'
  | 'maximizeMinimize'
  | 'maximizeMinimize2'
  | 'menu'
  | 'menu2'
  | 'menu3'
  | 'menu4'
  | 'microphone'
  | 'microphone2'
  | 'notification'
  | 'notification2'
  | 'playPause'
  | 'playPauseCircle'
  | 'plusToX'
  | 'pocket'
  | 'radioButton'
  | 'scrollDown'
  | 'searchToX'
  | 'settings'
  | 'settings2'
  | 'share'
  | 'skipBack'
  | 'skipForward'
  | 'star'
  | 'thumbUp'
  | 'toggle'
  | 'trash'
  | 'trash2'
  | 'twitter'
  | 'userMinus'
  | 'userPlus'
  | 'userX'
  | 'video'
  | 'video2'
  | 'visibility'
  | 'visibility2'
  | 'volume'
  | 'youtube'
  | 'youtube2';
