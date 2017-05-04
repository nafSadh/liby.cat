const COOKIE_PREFIX = 'LIBY_CAT';

var app = angular
  .module('app', [
    // loopback
    'lbServices',
    // standard angular libs
    'ui.router', 'ngAnimate', 'ngAria', 'ngCookies', 'ngTouch', 'pascalprecht.translate',
    // angular material
    'ngMaterial',
    // 3rd party libs
    'ngMaterialSidemenu', 'mdDataTable', 'xeditable'
  ])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function init($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);
      setStates($stateProvider);
      $urlRouterProvider.otherwise('/');
    }]);

function setStates($stateProvider) {
  $stateProvider
    .state('frontPage', {
      url: '/',
      templateUrl: 'views/front-page.html',
      controller: 'FrontPageCtrl'
    })
    .state('signUp', {
      url: '/sign-up',
      templateUrl: 'views/sign-up.html',
      controller: 'SignUpCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl'
    })
    .state('orgs', {
      url: '/orgs',
      templateUrl: 'views/orgs.html',
      controller: 'OrgsCtrl'
    })
    .state('catalog-list', {
      url: '/catalog-list',
      templateUrl: 'views/catalog-list.html',
      controller: 'CatalogListCtrl'
    })
    .state('owned-catalogs', {
      url: '/owned-catalogs',
      templateUrl: 'views/owned-catalogs.html',
      controller: 'OwnedCatalogsCtrl'
    })
    .state('create-catalog', {
      url: '/create-catalog',
      templateUrl: 'views/create-catalog.html',
      controller: 'CreateCatalogCtrl'
    })
    .state('catalog', {
      url: '/catalog/:org/:catalog/:id',
      templateUrl: 'views/catalog.html',
      controller: 'CatalogCtrl'
    })
    .state('catalog-settings', {
      url: '/catalog/:org/:catalog/:id/settings',
      templateUrl: 'views/catalog-settings.html',
      controller: 'CatalogSettingsCtrl'
    })
    .state('catalog-info', {
      url: '/catalog/:org/:catalog/:id/info',
      templateUrl: 'views/catalog-settings.html',
      controller: 'CatalogSettingsCtrl'
    })
  ;
}
