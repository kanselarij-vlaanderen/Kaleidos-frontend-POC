import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class OverviewComponent extends Component {
  @action
  update(name, personId) {
    this.args.update(name,personId);
  }
}
