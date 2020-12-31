import React from 'react';

export default ({comments}) => { //PostId is a prop (destructuring vu qu'il y'en a qu'un)
    
/*const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        fetchData(); //useEffect est utilisé pour dire quand est-ce qu'on doit afficher
    }, []);*/

    const renderedComment = comments.map(comment => {
        let content;
        if(comment.status === 'approved') {
            content = comment.content;
        }
        if(comment.status === 'rejected') {
            content = 'Ce commentaire a été rejété';
        }
        if(comment.status === 'pending') {
            content = 'Ce commentaire est en cours de validation';
        }
    return <li key={comment.id}>{content}</li>
    });
return <ul>{renderedComment}</ul>
}