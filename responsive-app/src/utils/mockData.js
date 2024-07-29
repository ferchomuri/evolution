import { faker } from '@faker-js/faker';

export const mockData = faker.helpers.multiple(generateMockData, { count: 8 });

function generateMockData() {
  return {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(["t3", "t4", "t5", "t6", "t7", "t8"]),
    message: faker.lorem.sentence(),
    submittedOn: formatDate(faker.date.recent()),
    downloadPdf: faker.datatype.boolean({ probability: 0.5 }),
    image: faker.image.url({ width: 480, height: 640, category: "animals" }),
    selected: false,
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}