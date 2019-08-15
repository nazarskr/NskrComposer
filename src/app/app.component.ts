import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild ('rendererContainer', {static: false}) rendererContainer: ElementRef;
  renderer = new THREE.WebGLRenderer({ alpha: true });
  camera = null;
  scene = null;
  stars = [];
  title = 'NskrWebsite';

  constructor() {
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.z = 10;
    this.scene = new THREE.Scene();
    for ( let z = -1000; z < 10; z += 20 ) {
      const geometry   = new THREE.BoxBufferGeometry(300, 300, 300);
      const material = new THREE.MeshBasicMaterial( {color: 0xe1e0eb, wireframe: true } );
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = Math.random() * 1000 - 500;
      cube.position.y = Math.random() * 1000 - 500;
      cube.position.z = z;
      this.scene.add(cube);
      this.stars.push(cube);
    }
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.animate();
  }
  animate() {
      window.requestAnimationFrame(() => this.animate());
      for (let i = 0; i < this.stars.length; i++) {
        const star = this.stars[i];
        star.position.z +=  i / 50;
        star.rotation.z += 0.001;
        star.rotation.y += 0.001;
        star.rotation.x += 0.001;
        if (star.position.z > 1000) {
          star.position.z -= 2000;
        }
      }
      this.renderer.render(this.scene, this.camera);
  }
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }
}


