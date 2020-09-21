import Model , {attr, hasMany} from '@ember-data/model';

export default class AddressModel extends Model {
  @attr('string') streetName;
  @attr('number') houseNumber;
  @attr('string') city;
  @attr('string') postalCode;

  @hasMany('person') persons;
}
