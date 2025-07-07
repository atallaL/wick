//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState, useEffect} from 'react';
import './FeedbackModal.css'



const FeedbackModal = () => {
  
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(false);
  const [navFeedback, setNavFeedback] = useState(null); 
  const [aestheticFeedback, setAestheticFeedback] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 10000)
  }, [])

  return (
    <>
      {
        visible ? 
        <div className="feedbackContainer">
          <i class="bi bi-x" onClick={() => setVisible(false)}></i>
          <div className="feedbackContent">
            {
              !form ? 
              <>
                <p>We would greatly appreciate if you filled in our 15 second feedback form!</p> 
                <span onClick={() => setForm(true)}>Fill form here.</span> 
              </> :
              <>
                <div>
                  <p>Your experience with the navigation?</p>
                  <div className="feedbackOptions">
                    <i
                      className={`bi bi-hand-thumbs-down ${navFeedback === 'down' ? 'selected down' : ''}`}
                      onClick={() => setNavFeedback('down')}
                    ></i>
                    <i
                      className={`bi bi-hand-thumbs-up ${navFeedback === 'up' ? 'selected up' : ''}`}
                      onClick={() => setNavFeedback('up')}
                    ></i>
                  </div>
                </div>
                <div>
                  <p>Your opinion on the aesthetic?</p>
                  <div className="feedbackOptions"> 
                    <i
                      className={`bi bi-hand-thumbs-down ${aestheticFeedback === 'down' ? 'selected down' : ''}`}
                      onClick={() => setAestheticFeedback('down')}
                    ></i>
                    <i
                      className={`bi bi-hand-thumbs-up ${aestheticFeedback === 'up' ? 'selected up' : ''}`}
                      onClick={() => setAestheticFeedback('up')}
                    ></i>
                  </div>
                </div>
        
                <span onClick={() => setVisible(false)}>Submit</span>
        
              </>
            } 
          </div>
        </div>
        : null
      }
    </>
  );
};

export default FeedbackModal; 