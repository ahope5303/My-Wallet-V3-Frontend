angular
  .module('walletApp')
  .factory('modals', modals);

function modals ($uibModal, $ocLazyLoad) {
  const service = {};

  service.openTransfer = (addresses) => (
    $uibModal.open({
      templateUrl: 'partials/settings/transfer.jade',
      controller: 'TransferController',
      windowClass: 'bc-modal',
      resolve: { address: () => addresses }
    }).result
  );

  return service;
}
