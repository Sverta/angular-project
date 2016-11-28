function ComponentController(myDataService) {
    myDataService.getData().then(
        (resp) => {
        this.data = resp;
});
}


angular.module('todoApp')
    .component('component', {
        templateUrl: 'app/templates/component.html',
        controller: ComponentController,
        controllerAs: '$ctrl'
    });

