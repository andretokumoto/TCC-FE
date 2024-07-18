import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import './navheader.css'; 

const DropdownButton = ({ options ,nameButton}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? 'dropdown-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                variant="text"
                className='butom_simple'
            >
                {nameButton}
                
            </Button>
            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'dropdown-button',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

DropdownButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropdownButton;
