import Application from 'kaleidos-poc/app';
import config from 'kaleidos-poc/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
