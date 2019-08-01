import React, {Component} from 'react';
import  './../css/LikeCounter.css';
import { P, P1, ViewButton } from './styledComponent';

class LikeCounter extends Component {
    state = {
        likes: 0,
        dislikes:0,
        views:0,
        button:'',
        like:0,
        dislike:0
    };
    
    like = () => {
        this.setState({likes:this.state.likes + 1, views: this.state.views +1});
    };
    dislike = () => {
        this.setState({dislikes:this.state.dislikes + 1, views: this.state.views +1});
    };
    liked = () => {
        if(this.state.like === 0)
        this.setState({button: 'l', like:this.state.like + 1});
        else
        this.setState({button: 'l', like:this.state.like - 1});
        // this.setState({liked:!this.state.liked});
    };
    disliked = () => {
        if(this.state.dislike === 0)
        this.setState({button: 'd',dislike:this.state.dislike + 1});
        else
        this.setState({button: 'd',dislike:this.state.dislike - 1});
        if(this.state.like === 0)
        this.setState({button: 'l', like:this.state.like + 1});
        else if(this.state.like === 1)
        this.setState({button: 'l', like:this.state.like - 1});
    };

    render () {
        console.log("liked2",this.state.liked);
        // const liked = this.state.liked ? 'liked':'likebutton';
        return (
            <>
                <P>Changes when device is mobile</P>
                <P1 name="red">Styled component</P1>
                <button className="likeButton" onClick={this.like}><i className="fa fa-thumbs-up"></i> {this.state.likes}</button>
                <button className="dislikeButton" onClick={this.dislike}><i className="fa fa-thumbs-down"></i> {this.state.dislikes}</button>
                <ViewButton><i className="fa fa-eye"></i> {this.state.views}</ViewButton>

                <P1 name="blue">Like button</P1>
                <p className={this.state.like > 0 ?'liked': 'likebutton'} style={{marginLeft:10,display:'inline'}} onClick={this.liked}><i className="fa fa-thumbs-up">{this.state.like}</i></p>
                <p className={this.state.dislike > 0 ?'liked': 'likebutton'} style={{marginLeft:10,display:'inline'}} onClick={this.disliked}><i className="fa fa-thumbs-down">{this.state.dislike}</i></p>
            </>
        );
    }
}

export default LikeCounter;
