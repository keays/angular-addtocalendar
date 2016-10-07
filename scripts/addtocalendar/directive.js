export default function AddtocalendarDirective() {
  return {
    restrict: 'E',
    scope: {
      startDate: '@',
      endDate: '@',
      title: '@',
      description: '@',
      location: '@',
      className: '@',
      btnText: '@'
    },
    controller: 'AddtocalendarCtrl',
    template: require('./template.html')
  };
}