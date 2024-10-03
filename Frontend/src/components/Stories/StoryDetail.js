import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StoryDetail.css'; // Import your custom CSS for styling
import apiClient from '../../services/axiosConfig';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(true);
  const [contributionContent, setContributionContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStory();
    
  }, []);

  const fetchStory = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/stories/${id}/`);
      setStory(response.data);
      console.log(story.created_at)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching story:', error);
      setLoading(false);
    }
  };

  const handleContributionSubmit = async (e) => {
    e.preventDefault();
    if (story.contributions && story.contributions.length >= 4) {
      setError('Cannot add more contributions. This story is already completed.');
      return;
    }

    try {
      const token = localStorage.getItem('accessToken'); // Retrieve the access token
      const response = await apiClient.post(
        `http://127.0.0.1:8000/stories/${id}/contribute/`,
        {
          content: contributionContent,
        });
        

      // Update story state with the new contribution
      setStory((prevStory) => ({
        ...prevStory,
        contributions: [...prevStory.contributions, response.data],
      }));

      // Clear the input and error messages
      setContributionContent('');
      setError('');
    } catch (error) {
      console.error('Error adding contribution:', error);
      if (error.response) {
        setError(error.response.data.error || 'Failed to add contribution. Please try again.');
      } else {
        setError('Failed to add contribution. Please try again.');
      }
    }
  };

  if (loading) {
    return <p>Loading story details...</p>;
  }

  return (
    <div className="story-detail-container">
      <h1 className="story-title">{story.title}</h1>
      <p className="story-content">{story.content}</p>
      <p className="story-details"><strong>Author:</strong> User {story.author_username}</p>
      <p className="story-details"><strong>Created Date:</strong> {new Date(story.created_on).toLocaleString()}</p>
      <p className={story.completed ? 'completed' : 'ongoing'}>
        Status: {story.completed ? 'Completed' : 'Ongoing'}
      </p>

      <h3 className="contributions-title">Contributions:</h3>
      {story.contributions && story.contributions.length > 0 ? (
        <div className="contributions-list">
          {story.contributions.map((contribution) => (
            <div key={contribution.id} className="contribution-item">
              <p className="contribution-content">{contribution.content}</p>
              <p className="contribution-details">
                By User {contribution.author_username} on {new Date(contribution.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-contributions">No contributions yet.</p>
      )}

      {story.contributions && story.contributions.length < 4 && (
        <form onSubmit={handleContributionSubmit} className="contribution-form">
          <h3>Add your contribution</h3>
          <textarea
            value={contributionContent}
            onChange={(e) => setContributionContent(e.target.value)}
            placeholder="Write your contribution here..."
            required
          ></textarea>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Submit Contribution</button>
        </form>
      )}
    </div>
  );
};

export default StoryDetail;
