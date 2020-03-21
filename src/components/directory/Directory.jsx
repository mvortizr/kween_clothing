import React, {useState} from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

const sections = [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl:'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl:'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl:'sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl:'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl:'mens'
        }
      ];

const Directory = () => {
	
	const [menuSections, setMenuSections] = useState(sections);

	return (
      <div className='directory-menu'>
        {menuSections.map(({ id, ...section }) => (
          <MenuItem key={id}  {...section}/>
        ))}
      </div>
    );
}

export default Directory;