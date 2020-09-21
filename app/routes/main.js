import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class MainRoute extends Route {
  @service store;

  async model() {
    // Implement MOCK data
    this.store.push({
      data: [{
        id: 1,
        type: 'person',
        attributes: {
          firstName: 'brecht',
          lastName: 'Philips',
          age: 28
        },
        relationships: {
          address: {
            data:
              {
                id: 1,
                type: 'address',
                attributes: {
                  streetName: 'Op de dries',
                  houseNumber: 11,
                  city: 'Riemst',
                  postalCode: '3770'
                }
              }

          }
        }
      }, {
        id: 2,
        type: 'person',
        attributes: {
          firstName: 'frank',
          lastName: 'zowieja',
          age: 20
        }
      },
        {
          id: 1,
          type: 'address',
          attributes: {
            streetName: 'Op de dries',
            houseNumber: 11,
            city: 'Riemst',
            postalCode: '3770'
          }
        }

      ]
    });
    // Use the route to get all the data for the child components
    const fullObjects = [];
    const persons = await this.store.findAll('person')
    for (const person of persons.toArray()) {
      const address = await person.get('address');
      if (address) {
        fullObjects.pushObject({person, address})
      } else {
        fullObjects.pushObject({person})
      }
    }
    return {persons: fullObjects, store: this.store};
  }
}

