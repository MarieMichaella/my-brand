const { getBlogs } = require('./index.js');

test('should return a list of blogs', async () => {
    const mockBlogs = [
      { title: 'Blog 1', content: 'Lorem ipsum dolor sit amet' },
      { title: 'Blog 2', content: 'Consectetur adipiscing elit' },
    ];
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.spyOn(Blog, 'find').mockResolvedValueOnce(mockBlogs);
    
    await getBlogs({}, mockResponse);
    
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: mockBlogs });
  });
  