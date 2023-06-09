const React = require('react');
const Layout = require('./Layout');
const CommentItem = require('./CommentItem');

function TeaCards({ teas, user, comments = [] }) {
  return (
    <Layout user={user} comments={comments}>
      <hr />
      <br />

      <div
        data-id={teas.id}
        className='card'
        style={{ width: '30rem', margin: '0 auto' }}
      >
        <img src={teas.image} className='card-img-top' alt='чай' />
        <div className='card-body'>
          <h5 className='card-title'>{teas.name}</h5>
          <p className='card-text'>{teas.location}</p>
          <p className='card-text'>{teas.description}</p>

          <form id='add-comment' action={`/api/card/${teas.id}`}>
            <div class='input-group mb-3'>
              <input
                name='comment'
                required
                type='text'
                class='form-control'
                placeholder='Add comment'
                aria-label='Comment'
                aria-describedby='button-addon2'
              />
              <button
                class='btn btn-outline-secondary btn-outline-dark'
                type='submit'
                id='button-addon2'
              >
                submit
              </button>
            </div>
            <div className='coments-users qwerty'>
              {comments.map((comment) => (
                <CommentItem comment={comment} user={user} />
              ))}
            </div>
            <div className='new-comment'>
           
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = TeaCards;
