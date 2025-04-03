import test from 'ava';
import { ContactsController } from './controllers';

test('Testeo el constructor del controller', async t => {
  // test de ejemplo
  const controller = new ContactsController();
  await controller.contacts.load();
  t.truthy(controller.contacts.getAll().length > 0);
});

test('Testeo el método processOptions', async t => {
  const controller = new ContactsController();
  await controller.contacts.load();

  // Agrega un contacto
  controller.contacts.addOne({ id: 5, name: 'Carlos' });

  // Verificar que el contacto se haya agregado
  const contact = controller.contacts.getOneById(5);

  t.deepEqual(contact, { id: 5, name: 'Carlos' });
});
