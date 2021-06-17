import { Component, OnInit } from '@angular/core';
import { XmlReadService } from '../xml/xml-read.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.less']
})
export class GaleriaComponent implements OnInit {

  constructor(
    private xml: XmlReadService,
    private modalService: NgbModal
    ) { }

  xmlContent: any;
  name:string = '';
  afiliation:string = '';

  ngOnInit(): void {
    this.xml.loadXML().subscribe(data => {
      this.xml.parseXML(data).then(data => {
        this.xmlContent = data;
      })
    })
  }

  showAll() {
    this.ngOnInit();
  }

  nameFilter(data:any){
    let dataFiltered = data.filter((d:any) => {
      if (d.name._ == this.name) {
        return d;
      }
    })
    this.xmlContent = dataFiltered
  }

  afiliationFilter(data:any){
    let dataFiltered = data.filter((d:any) => {
      if (d.foot == this.afiliation) {
        return d;
      }
    })
    this.xmlContent = dataFiltered
  }

  openModal(item: any) {
    const modalRef = this.modalService.open(ModalComponent)
    modalRef.componentInstance.card = item;
  }

}
