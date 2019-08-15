import { Component, OnInit } from '@angular/core';
import { IPiecesList, IEvent, IMixcloud, IYoutube } from '../../shared/interfaces';
import { PiecesList, Event, MixcloudTrack, YoutubeVideo } from '../../shared/classes';
import { EventsService } from '../../shared/services/events.service';
import { PiecesListService } from '../../shared/services/pieces-list.service';
import { MixcloudService } from '../../shared/services/mixcloud.service';
import { YoutubeService } from '../../shared/services/youtube.service';

@Component({
  selector: 'app-admin-music',
  templateUrl: './admin-music.component.html',
  styleUrls: ['./admin-music.component.scss']
})
export class AdminMusicComponent implements OnInit {
  // events
  events: Array<IEvent>;
  eventId: number;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventCity: string;
  eventName: string;
  pieceTitle: string;
  // pieces list
  piecesList: Array<IPiecesList>;
  pieceId: number;
  pieceTitleList: string;
  pieceCollab: string;
  piecePerformers: string;
  pieceYear: number;
  // audio
  tracks: Array<IMixcloud>;
  trackId: number;
  trackSrc: string;
  // video
  videos: Array<IYoutube>;
  videoId: number;
  youtubeId: string;
  constructor(private eventsService: EventsService,
              private piecesListService: PiecesListService,
              private mixcloudService: MixcloudService,
              private youtubeService: YoutubeService) {
    this.getEvents();
    this.getPiecesList();
    this.getMixcloud();
    this.getYoutubeIds();
  }

  ngOnInit() {
  }
  // events
  private getEvents() {
    this.eventsService.getEvents().subscribe(
      data => {
        this.events = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addEvent(): void {
    const newId = this.events[this.events.length - 1].id + 1;
    const newEvent = new Event (
      newId,
      this.eventDate,
      this.eventTime,
      this.eventLocation,
      this.eventCity,
      this.eventName,
      this.pieceTitle);
    this.eventsService.addEvent(newEvent).subscribe(() => {
      this.getEvents();
    });
    this.eventId = null;
    this.eventDate = '';
    this.eventTime = '';
    this.eventLocation = '';
    this.eventCity = '';
    this.eventName = '';
    this.pieceTitle = '';
  }
  public editEvent(myEvent: IEvent): void {
    this.eventId = myEvent.id;
    this.eventDate = myEvent.date;
    this.eventTime = myEvent.time;
    this.eventLocation = myEvent.location;
    this.eventCity = myEvent.city;
    this.eventName = myEvent.event;
    this.pieceTitle = myEvent.piece;
  }
  public saveEvent(): void {
    const newEvent = new Event (
      this.eventId,
      this.eventDate,
      this.eventTime,
      this.eventLocation,
      this.eventCity,
      this.eventName,
      this.pieceTitle);
    this.eventsService.updateEvent(newEvent).subscribe(() => {
      this.getEvents();
    });
    this.eventId = null;
    this.eventDate = '';
    this.eventTime = '';
    this.eventLocation = '';
    this.eventCity = '';
    this.eventName = '';
    this.pieceTitle = '';
  }
  public deleteEvent(myEvent: IEvent): void {
    const { id } = myEvent;
    this.eventsService.delEvent(id).subscribe(() => {
      this.getEvents();
    });
  }
  // pieces list
  private getPiecesList() {
    this.piecesListService.getPiecesList().subscribe(
      data => {
        this.piecesList = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addPiece(): void {
    const newId = this.piecesList[this.piecesList.length - 1].id + 1;
    const newPiece = new PiecesList (
      newId,
      this.pieceTitleList,
      this.pieceCollab,
      this.piecePerformers,
      this.pieceYear);
    this.piecesListService.addPiece(newPiece).subscribe(() => {
      this.getPiecesList();
    });
    this.pieceId = null;
    this.pieceTitleList = '';
    this.pieceCollab = '';
    this.piecePerformers = '';
    this.pieceYear = null;
  }
  public editPiece(piece: IPiecesList): void {
    this.pieceId = piece.id;
    this.pieceTitleList = piece.title;
    this.pieceCollab = piece.collab;
    this.piecePerformers = piece.perf;
    this.pieceYear = piece.year;
  }
  public savePiece(): void {
    const newPiece = new PiecesList (
      this.pieceId,
      this.pieceTitleList,
      this.pieceCollab,
      this.piecePerformers,
      this.pieceYear);
    this.piecesListService.updatePiecesList(newPiece).subscribe(() => {
      this.getPiecesList();
    });
    this.pieceId = null;
    this.pieceTitleList = '';
    this.pieceCollab = '';
    this.piecePerformers = '';
    this.pieceYear = null;
  }
  public deletePiece(piece: IPiecesList): void {
    const { id } = piece;
    this.piecesListService.delPiece(id).subscribe(() => {
      this.getPiecesList();
    });
  }
  // audio
  private getMixcloud() {
    this.mixcloudService.getMixcloudSrc().subscribe(
      data => {
        this.tracks = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addTrack(): void {
    const newId = this.tracks[this.tracks.length - 1].id + 1;
    const newTrack = new MixcloudTrack (
      newId,
      this.trackSrc
    );
    this.mixcloudService.addMixcloudSrc(newTrack).subscribe(() => {
      this.getMixcloud();
    });
    this.trackId = null;
    this.trackSrc = '';
  }
  public editTrack(track: IMixcloud): void {
    this.trackId = track.id;
    this.trackSrc = track.src;
  }
  public saveTrack(): void {
    const newTrack = new MixcloudTrack (
      this.trackId,
      this.trackSrc);
    this.mixcloudService.updateMixcloudSrc(newTrack).subscribe(() => {
      this.getMixcloud();
    });
    this.trackId = null;
    this.trackSrc = '';
  }
  public deleteTrack(track: IMixcloud): void {
    const { id } = track;
    this.mixcloudService.delMixcloudSrc(id).subscribe(() => {
      this.getMixcloud();
    });
  }
  // video
  private getYoutubeIds() {
    this.youtubeService.getYoutubeIds().subscribe(
      data => {
        this.videos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addVideo(): void {
    const newId = this.videos[this.videos.length - 1].id + 1;
    const newVideo = new YoutubeVideo (
      newId,
      this.youtubeId
    );
    this.youtubeService.addYoutubeId(newVideo).subscribe(() => {
      this.getYoutubeIds();
    });
    this.videoId = null;
    this.youtubeId = '';
  }
  public editVideo(video: IYoutube): void {
    this.videoId = video.id;
    this.youtubeId = video.youtubeId;
  }
  public saveVideo(): void {
    const newVideo = new YoutubeVideo (
      this.videoId,
      this.youtubeId);
    this.youtubeService.updateYoutubeId(newVideo).subscribe(() => {
      this.getYoutubeIds();
    });
    this.videoId = null;
    this.youtubeId = '';
  }
  public deleteVideo(video: IYoutube): void {
    const { id } = video;
    this.youtubeService.delYoutubeId(id).subscribe(() => {
      this.getYoutubeIds();
    });
  }
}
