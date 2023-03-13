const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const fs = require('fs');
const sinon = require('sinon');

const { expect } = chai;

chai.use(chaiHttp)

const mockFile = []

describe('Testing ecoturism API', () => {
  describe('using POST method in /activities', () => {
    beforeEach(() => {
      sinon.stub(fs.promises, 'readFile')
        .resolves(mockFile);

      sinon.stub(fs.promises, 'writeFile')
        .resolves();
    });

    afterEach(() => {
      sinon.restore();
    });
    it('successfully create an activity', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Trekking',
          price: 0,
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal({ message: 'Atividade cadastrada com sucesso!' });
    });
    it('validates if key name exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          price: 0,
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo name é obrigatório" });
    });
    it('validates name length', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Tre',
          price: 0,
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo name deve ter pelo menos 4 caracteres" });
    });
    it('validates if the price key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo price é obrigatório" });
    });
    it('validates if the price is greater than or equal to 0 ', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: -1,
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo price deve ser um número maior ou igual a zero"})
    });
    it('validates if price is a number', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 'xablau',
          description: {
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          },
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo price deve ser um número maior ou igual a zero"})
    });
    it('validates if the description key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 0,
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo description é obrigatório" });
    });
    it('validates if the rating key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 0,
          description: {}
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo rating é obrigatório" });
    });
    it('validates if the difficulty key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 0,
          description: {
            rating: 5,
          }
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo difficulty é obrigatório" });
    });
    it('validates if the createdAt key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 0,
          description: {
            rating: 5,
            difficulty: "Fácil"
          }
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo createdAt é obrigatório" });
    });
    it('validates if the createdAt key exists', async () => {
      const response = await chai.request(app)
        .post('/activities')
        .send({
          name: 'Treeking',
          price: 0,
          description: {
            rating: 5,
            difficulty: "Fácil",
            createdAt: '1-02/08'
          }
        });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    });
  });
});