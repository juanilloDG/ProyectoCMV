import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  @Input() card: any;

  ngOnInit(): void {
    
  }

  closeModal() {
    this.modalService.dismissAll(ModalComponent);
  }

}
