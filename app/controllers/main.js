import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class MainController extends Controller {
  @service store;

  // Use the functionality in the controller instead of in the component (highest level)
  @action
  update(name, personId) {
    this.store.findRecord('person', personId, {backgroundReload: false}).then((foundPerson) => {
      foundPerson.firstName = name;
      foundPerson.save()
    })
  }
}
