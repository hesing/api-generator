class <%= upCaseName %>Ctrl {
  constructor(<%= upCaseName %>Service) {
    this.name = '<%= name %>';
    this.<%= upCaseName %>Service = <%= upCaseName %>Service;
  }

  getData(){
  	this.<%= upCaseName %>Service.get().then(res => this.data = res);
  }

  $onInit(){
  	this.getData();
  }
}

export default <%= upCaseName %>Ctrl;
