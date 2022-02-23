import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { HistoryComponent } from '../../components/history/history.component'
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HistoryPage, HistoryComponent, NavComponent, FooterComponent]
})
export class HistoryPageModule {}
