import { Observable } from 'rxjs/Observable';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Customer } from '../../../models/ICustomer';
import { GetDatosBitcoinService } from '../../../services/get-datos-bitcoin.service';
import { SaveDatosBitcoinService } from '../../../services/save-datos-bitcoin.service';

@Component({
  selector: 'app-dados-bitcoin',
  templateUrl: './dados-bitcoin.component.html',
  styleUrls: ['./dados-bitcoin.component.css']
})
export class DadosBitcoinComponent implements OnInit {
  @Input() public buttonNext = 'Próximo';
  @Input() public routerBack = '';
  @Input() public numberBackStage = '';
  @Input() public txtTitle = '';
  @Input() loadData = false;

  @Output() public formSubmit = new EventEmitter();
  @Output() public numStage = new EventEmitter();
  @Output() saveWithSucess: EventEmitter<any>  = new EventEmitter();
  @Output() isChangeForm: EventEmitter<any>  = new EventEmitter();
  
  listExchange : any = ['Mercado Bitcoin', 'Coin BR'];
  selectExchange : boolean = false;
  form_pt2 : any;
  formError : boolean;
  end_CarteiraError : boolean = false;
  exchangeError :  boolean = false;
  reqBtc : any;
  respBtc : any;
  exchangeData: string;

  constructor(private formBuilder : FormBuilder,
    private SgetDatosBtc: GetDatosBitcoinService,
    private SsaveDatosBtc: SaveDatosBitcoinService
    ) { 
    this.form_pt2 = this.formBuilder.group({
      end_Carteira: ['', Validators.required],
      formExchange: ['']
    });

  }

  ngOnInit() {
      this.loadDatosBitcoin();
  }

  next(){
    this.verifyForm();

    if (this.formError === true){
      // erro
    }else{
      if(this.loadData){
        this.saveDatosBitcoin();
      }else{
        this.formSubmit.emit(this.form_pt2.value);      
      }
      
    }
  }

  verifyForm(){
    this.isChangeForm.emit(true);
    if (this.form_pt2.controls.end_Carteira.status === 'INVALID'){
      this.end_CarteiraError = true;
    }else{
      this.end_CarteiraError = false;
    }

    if(this.selectExchange == false){
      this.exchangeError = true;
    }else{
      this.exchangeError = false;
    }

    if (this.end_CarteiraError == true || this.exchangeError == true){
      this.formError = true;
    }else{
      this.formError = false;
    }
  }

  back(stage){
    this.numStage.emit(stage);
  }

  loadDatosBitcoin(){
    this.reqBtc = {
      "id": "jfdhsjfhsdohfiosdhfiodf",
      "user": "Marcos"
    }

    this.SgetDatosBtc.getDatosBtc(this.reqBtc).subscribe(data =>{
      this.respBtc = data;
      this.exchangeData = this.respBtc.exchanges;
      if(this.loadData){
        this.selectExchange = true;
        this.setForm();
      }
    });
  }

  setForm(){
    this.form_pt2.controls['end_Carteira'].setValue(this.respBtc.end_Carteira);
  }

  saveDatosBitcoin(){
    this.reqBtc = {
      "id": "jfdhsjfhsdohfiosdhfiodf",
      "user": "Marcos",
      "edit":{
        "end_Carteira": this.form_pt2.controls.end_Carteira.value,
        "exchange": this.selectExchange
      }
    }

    this.SsaveDatosBtc.saveDatosBtc(this.reqBtc).subscribe(data =>{
      if(data == 200){
        this.saveWithSucess.emit(true);
        this.isChangeForm.emit(false);
      }else{
        this.saveWithSucess.emit(false);
      }
    });
  }
}
