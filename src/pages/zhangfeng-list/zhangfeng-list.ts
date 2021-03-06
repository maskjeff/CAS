import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-zhangfeng-list',
  templateUrl: 'zhangfeng-list.html',
})
export class ZhangfengList {
  Members:  Array < any >
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.Members = [{
          id: 22,
          name: "张峰",
          sex: "M"
        },
        {
          id: 1,
          name: "崔国强",
          sex: "M"
        },
        {
          id: 33,
          name: "张吉生",
          sex: "M"
        },
        {
          id: 5,
          name: "小海",
          sex: "M"
        },
        {
          id: 2,
          name: "Betty",
          sex: "F"
        },
        {
          id: 99,
          name: "王华山",
          sex: "M"
        }

      ]
    }

  mySort(type: string) {
    switch (type) {
      case "up":
        this.Members.sort(function (a, b) {
          return a.id - b.id
        })
        break;

      case "down":
        this.Members.sort(function (a, b) {
          return b.id - a.id
        })
        break;

      case "random":
        this.Members.sort(function (a, b) {
          return Math.random() - Math.random()
        })
        break;


    }

  }

  sort2() {
    this.Members.sort(function (a, b) {
      return b.id - a.id
    })
  }
  sort3() {
    this.Members.sort(function (a, b) {
      return Math.random() - Math.random()
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhangfengList');
  }

}
