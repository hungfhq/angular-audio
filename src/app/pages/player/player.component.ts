import { Component, OnInit } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { StreamState } from '../../interfaces/stream-state';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state: StreamState;
  currentFile: any = {};

  constructor (
    public audioService: AudioService,
    public cloudService: CloudService
  ) {
    // get media files
    cloudService.getFiles().subscribe(files => this.files = files);

    // listen to stream state
    this.audioService.getState().subscribe(state => this.state = state);
  }

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      //
    });
  }
}
