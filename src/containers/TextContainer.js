import React from 'react'
import { connect } from 'react-redux'
import { fetchScore } from '../store/actions'


const TextContainer = ({ dispatch }) => {

    let input;

    return (
        <div>
            <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(fetchScore(input.value));
                    input.value = '';
                }
            }>
                <input ref={node => {
                            input = node;
                        }
                    } 
                />

                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default connect()(TextContainer)
