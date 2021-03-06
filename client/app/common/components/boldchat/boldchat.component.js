require('./boldchat.component.less')

const commentingIcon = require('./images/commenting.svg')

const boldchatComponent = {
  template: `
    <div class="boldchat-button" ng-click="boldchat.open()">
      <p>${commentingIcon} Contact a Representative</p>
    </div>
  `,
  controllerAs: 'boldchat',
  /* @ngInject */
  controller ($log, $element, $scope, $window, $location) {
    const element = angular.element($element[0])

    const bdid = '457830310750908782'
    const _bcvma = [
      ['setAccountID', '461159850398350203'],
      ['setParameter', 'WebsiteID', '457763915474596414'],
      ['addStatic', { type: 'chat', bdid }]
    ]
    $window._bcvma = _bcvma
    $window.bcLoaded = true
    $window.pageViewer && $window.pageViewer.load()

    this.open = () => {
      const unwatch = $scope.$watch(
        () => document.getElementById('bc-chat-container'), // eslint-disable-line
        (chatContainer) => {
          if (chatContainer) {
            element.append(chatContainer)
            angular.element(chatContainer).addClass('show')
            unwatch()
          }
        }
      )

      $window._bcvmw.chatWindow({
        bdid,
        element: 'boldchat',
        embed: true,
        height: 530,
        html: false,
        type: 'chat',
        video: false,
        width: 350
      })
    }
  }
}

module.exports = boldchatComponent
