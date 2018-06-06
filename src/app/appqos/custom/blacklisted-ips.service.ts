import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistedIpsService {

  blacklist = [
    '121.244.196.0',
    '121.244.196.1',
    '121.244.196.2',
    '121.244.196.3',
    '121.244.196.4',
    '121.244.196.5',
    '121.244.196.6',
    '121.244.196.7',
    '121.244.196.8',
    '121.244.196.9',
    '121.244.196.10',
    '121.244.196.11',
    '121.244.196.12',
    '121.244.196.13',
    '121.244.196.14',
    '121.244.196.15',
    '121.244.196.16',
    '121.244.196.17',
    '121.244.196.18',
    '121.244.196.19',
    '121.244.196.20',
    '121.244.196.21',
    '121.244.196.22',
    '121.244.196.23',
    '121.244.196.24',
    '121.244.196.25',
    '121.244.196.26',
    '121.244.196.27',
    '121.244.196.28',
    '121.244.196.29',
    '121.244.196.30',
    '121.244.196.31',
    '121.244.196.32',
    '121.244.196.33',
    '121.244.196.34',
    '121.244.196.35',
    '121.244.196.36',
    '121.244.196.37',
    '121.244.196.38',
    '121.244.196.39',
    '121.244.196.40',
    '121.244.196.41',
    '121.244.196.42',
    '121.244.196.43',
    '121.244.196.44',
    '121.244.196.45',
    '121.244.196.46',
    '121.244.196.47',
    '121.244.196.48',
    '121.244.196.49',
    '121.244.196.50',
    '121.244.196.51',
    '121.244.196.52',
    '121.244.196.53',
    '121.244.196.54',
    '121.244.196.55',
    '121.244.196.56',
    '121.244.196.57',
    '121.244.196.58',
    '121.244.196.59',
    '121.244.196.60',
    '121.244.196.61',
    '121.244.196.62',
    '121.244.196.63',
    '121.244.196.64',
    '121.244.196.65',
    '121.244.196.66',
    '121.244.196.67',
    '121.244.196.68',
    '121.244.196.69',
    '121.244.196.70',
    '121.244.196.71',
    '121.244.196.72',
    '121.244.196.73',
    '121.244.196.74',
    '121.244.196.75',
    '121.244.196.76',
    '121.244.196.77',
    '121.244.196.78',
    '121.244.196.79',
    '121.244.196.80',
    '121.244.196.81',
    '121.244.196.82',
    '121.244.196.83',
    '121.244.196.84',
    '121.244.196.85',
    '121.244.196.86',
    '121.244.196.87',
    '121.244.196.88',
    '121.244.196.89',
    '121.244.196.90',
    '121.244.196.91',
    '121.244.196.92',
    '121.244.196.93',
    '121.244.196.94',
    '121.244.196.95',
    '121.244.196.96',
    '121.244.196.97',
    '121.244.196.98',
    '121.244.196.99',
    '121.244.196.100',
    '121.244.196.101',
    '121.244.196.102',
    '121.244.196.103',
    '121.244.196.104',
    '121.244.196.105',
    '121.244.196.106',
    '121.244.196.107',
    '121.244.196.108',
    '121.244.196.109',
    '121.244.196.110',
    '121.244.196.111',
    '121.244.196.112',
    '121.244.196.113',
    '121.244.196.114',
    '121.244.196.115',
    '121.244.196.116',
    '121.244.196.117',
    '121.244.196.118',
    '121.244.196.119',
    '121.244.196.120',
    '121.244.196.121',
    '121.244.196.122',
    '121.244.196.123',
    '121.244.196.124',
    '121.244.196.125',
    '121.244.196.126',
    '121.244.196.127',
    '121.244.196.128',
    '121.244.196.129',
    '121.244.196.130',
    '121.244.196.131',
    '121.244.196.132',
    '121.244.196.133',
    '121.244.196.134',
    '121.244.196.135',
    '121.244.196.136',
    '121.244.196.137',
    '121.244.196.138',
    '121.244.196.139',
    '121.244.196.140',
    '121.244.196.141',
    '121.244.196.142',
    '121.244.196.143',
    '121.244.196.144',
    '121.244.196.145',
    '121.244.196.146',
    '121.244.196.147',
    '121.244.196.148',
    '121.244.196.149',
    '121.244.196.150',
    '121.244.196.151',
    '121.244.196.152',
    '121.244.196.153',
    '121.244.196.154',
    '121.244.196.155',
    '121.244.196.156',
    '121.244.196.157',
    '121.244.196.158',
    '121.244.196.159',
    '121.244.196.160',
    '121.244.196.161',
    '121.244.196.162',
    '121.244.196.163',
    '121.244.196.164',
    '121.244.196.165',
    '121.244.196.166',
    '121.244.196.167',
    '121.244.196.168',
    '121.244.196.169',
    '121.244.196.170',
    '121.244.196.171',
    '121.244.196.172',
    '121.244.196.173',
    '121.244.196.174',
    '121.244.196.175',
    '121.244.196.176',
    '121.244.196.177',
    '121.244.196.178',
    '121.244.196.179',
    '121.244.196.180',
    '121.244.196.181',
    '121.244.196.182',
    '121.244.196.183',
    '121.244.196.184',
    '121.244.196.185',
    '121.244.196.186',
    '121.244.196.187',
    '121.244.196.188',
    '121.244.196.189',
    '121.244.196.190',
    '121.244.196.191',
    '121.244.196.192',
    '121.244.196.193',
    '121.244.196.194',
    '121.244.196.195',
    '121.244.196.196',
    '121.244.196.197',
    '121.244.196.198',
    '121.244.196.199',
    '121.244.196.200',
    '121.244.196.201',
    '121.244.196.202',
    '121.244.196.203',
    '121.244.196.204',
    '121.244.196.205',
    '121.244.196.206',
    '121.244.196.207',
    '121.244.196.208',
    '121.244.196.209',
    '121.244.196.210',
    '121.244.196.211',
    '121.244.196.212',
    '121.244.196.213',
    '121.244.196.214',
    '121.244.196.215',
    '121.244.196.216',
    '121.244.196.217',
    '121.244.196.218',
    '121.244.196.219',
    '121.244.196.220',
    '121.244.196.221',
    '121.244.196.222',
    '121.244.196.223',
    '121.244.196.224',
    '121.244.196.225',
    '121.244.196.226',
    '121.244.196.227',
    '121.244.196.228',
    '121.244.196.229',
    '121.244.196.230',
    '121.244.196.231',
    '121.244.196.232',
    '121.244.196.233',
    '121.244.196.234',
    '121.244.196.235',
    '121.244.196.236',
    '121.244.196.237',
    '121.244.196.238',
    '121.244.196.239',
    '121.244.196.240',
    '121.244.196.241',
    '121.244.196.242',
    '121.244.196.243',
    '121.244.196.244',
    '121.244.196.245',
    '121.244.196.246',
    '121.244.196.247',
    '121.244.196.248',
    '121.244.196.249',
    '121.244.196.250',
    '121.244.196.251',
    '121.244.196.252',
    '121.244.196.253',
    '121.244.196.254',
    '121.244.196.255'
  ];

  constructor() {
  }

  getBlacklistedIPs() {
    return this.blacklist.slice();
  }
}