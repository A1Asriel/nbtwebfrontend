export const fetchData = async (endpoint, payload) => {
    try {
      var response;
      if (!payload) {
        response = await fetch('/api/'+endpoint);
      } else {
        response = await fetch('/api/'+endpoint, {
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          },
          body: payload
        });
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch data from API');
    }
  };
