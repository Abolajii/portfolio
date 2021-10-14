import React, { useContext, useEffect, useState } from 'react';
import { Project } from '../components';
import { tabData, tabDetails } from '../components/Project/data';
import { ThemeContext } from '../context/ThemeContext';

import { FaLink } from 'react-icons/fa';

const ProjectContainer = () => {
	const { isDark } = useContext(ThemeContext);

	const [isHover, setIsHover] = useState(false);
	const [id, setId] = useState(null);

	const [tags, setTag] = useState('all');

	const [tabs, setTabs] = useState(tabDetails);

	useEffect(() => {
		return tags === 'all'
			? setTabs(tabDetails)
			: setTabs(tabDetails.filter((item) => item.tag === tags));
	}, [tags]);

	const handleHover = (id) => {
		setIsHover(!isHover);
		setId(id);
	};

	const handleClick = (tag) => {
		setTag(tag);
	};

	const tabAnimation = {
		initial: {
			opacity: 0,
			scale: 0,
			transition: {
				delay: 0.1,
				duration: 0.3,
			},
		},
		enter: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.1,
				duration: 0.3,
			},
		},
	};

	return (
		<Project id='project' isDark={isDark}>
			<Project.Inner>
				<Project.UpperDiv>
					<Project.IconDiv isDark={isDark}>
						<Project.Icon />
					</Project.IconDiv>
					<Project.Text isDark={isDark}>Project</Project.Text>
				</Project.UpperDiv>

				<Project.TabContainer>
					{tabData.map((item) => {
						return (
							<Project.TabItem
								onClick={() => handleClick(item.tag)}
								key={item.id}
								isDark={isDark}>
								{item.title}
							</Project.TabItem>
						);
					})}
				</Project.TabContainer>

				<Project.ProjectsContainer>
					{tabs.map((item) => {
						return (
							<Project.ProjectItem
								initial='initial'
								animate='enter'
								variants={tabAnimation}
								key={item.id}>
								<Project.ProjectItemImageContainer>
									<Project.ProjectItemImage isHover={item.id === id && isHover}>
										<Project.ProjectItemImageHoverDiv
											onMouseEnter={() => handleHover(item.id)}
											onMouseLeave={() => handleHover(item.id)}>
											<FaLink />
										</Project.ProjectItemImageHoverDiv>
									</Project.ProjectItemImage>
								</Project.ProjectItemImageContainer>
								<Project.ProjectItemTextContainer>
									<Project.ProjectItemText>
										{item.title}
									</Project.ProjectItemText>
									<Project.ProjectItemSubText>
										Technology Used:
										{item.techUsed}
									</Project.ProjectItemSubText>
									<Project.ProjectItemSubText>
										Category: {item.category}
									</Project.ProjectItemSubText>
								</Project.ProjectItemTextContainer>
							</Project.ProjectItem>
						);
					})}
				</Project.ProjectsContainer>
			</Project.Inner>
		</Project>
	);
};

export default ProjectContainer;
