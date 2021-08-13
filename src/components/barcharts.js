import React from 'react';
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () => {

  const URL = "http://3c558baeae44.ngrok.io/";

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(URL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

  return (
      <div>
        <Bar
          data = {{
            labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets : [
              {
                label : '# No of votes',
                data : post.freq,
                backgroundColor : ['red']
              }
            ]
          }}
          height = {400}
          width = {600}
          options={{ 
            maintainAspectRatio: false
          }}
        />
      </div>
    )
}

export default BarChart
