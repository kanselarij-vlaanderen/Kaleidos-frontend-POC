import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from '@ember/object';

export default class PersonDetailComponent extends Component {
  @tracked trackedPerson;
  @tracked trackedAddress;

  // Updates to the new value if the parent is updated with the click function
  @action
  trackedValues() {
    this.trackedPerson = this.args.person.person;
    this.trackedAddress = this.args.person.address;
  }

  // If implemented in the template (this.updateNames) this function will trigger everytime this.args.peron.person is changed
  // get updatesNames(){
  //   this.trackedPerson = this.args.person.person;
  // }

  @action
  updateParentValues() {
    const names = ['bert', 'henk']
    const number = Math.floor(Math.random() * (1 + 1));
    this.args.update(names[number], this.args.person.person.id);
  }
}
