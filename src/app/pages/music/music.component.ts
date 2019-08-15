import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import { Sort } from '@angular/material/sort';
import { YoutubeService } from 'src/app/shared/services/youtube.service';
import { MixcloudService } from 'src/app/shared/services/mixcloud.service';
import { PiecesListService } from 'src/app/shared/services/pieces-list.service';
import { EventsService } from 'src/app/shared/services/events.service';
import { IEvent, IYoutube, IMixcloud, IPiecesList } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})

export class MusicComponent  implements OnInit {
  events: Array<IEvent>;
  piecesList: Array<IPiecesList>;
  sortedData: Array<IPiecesList>;
  tracks: Array<IMixcloud>;
  player: YT.Player;
  videos: Array<IYoutube>;

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
  sortData(sort: Sort) {
    const data = this.piecesList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'collab': return compare(a.collab, b.collab, isAsc);
        case 'perf': return compare(a.perf, b.perf, isAsc);
        case 'year': return compare(a.year, b.year, isAsc);
        default: return 0;
      }
    });
  }
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
  private getPiecesList() {
    this.piecesListService.getPiecesList().subscribe(
      data => {
        this.piecesList = data;
        this.sortedData = this.piecesList.slice();
      },
      err => {
        console.log(err);
      }
    );
  }
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
  savePlayer(player) {
    this.player = player;
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

