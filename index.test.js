const request = require('supertest');
const app = require('./index');

describe('GET /math/circle/:r', () => {
  describe('Positive cases', () => {
    it('should return area and circumference for r=3', async () => {
      const response = await request(app).get('/math/circle/3');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        area: '28.27',
        circumference: '18.85'
      });
    });

    it('should return area and circumference for r=5', async () => {
      const response = await request(app).get('/math/circle/5');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        area: '78.54',
        circumference: '31.42'
      });
    });

    it('should return area and circumference for r=1', async () => {
      const response = await request(app).get('/math/circle/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        area: '3.14',
        circumference: '6.28'
      });
    });
  });

  describe('Error cases', () => {
    it('should return 400 for r=0', async () => {
      const response = await request(app).get('/math/circle/0');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('radius must be a positive number');
    });

    it('should return 400 for r=-1', async () => {
      const response = await request(app).get('/math/circle/-1');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('radius must be a positive number');
    });

    it('should return 400 for r=abc', async () => {
      const response = await request(app).get('/math/circle/abc');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('radius must be a positive number');
    });

    it('should return 400 for r=-5.5', async () => {
      const response = await request(app).get('/math/circle/-5.5');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('radius must be a positive number');
    });
  });
});
