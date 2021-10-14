import React from 'react';

import {
	Container,
	IconDiv,
	Icon,
	Text,
	Inner,
	UpperDiv,
	TabContainer,
	TabItem,
	ProjectsContainer,
	ProjectItem,
	ProjectItemImageContainer,
	ProjectItemImage,
	ProjectItemTextContainer,
	ProjectItemText,
	ProjectItemSubText,
	ProjectItemImageHoverDiv,
} from './styles';

const Project = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Project.Inner = function ProjectInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Project.UpperDiv = function ProjectUpperDiv({ children, ...restProps }) {
	return <UpperDiv {...restProps}>{children}</UpperDiv>;
};

Project.IconDiv = function ProjectIconDiv({ isDark, children, ...restProps }) {
	return (
		<IconDiv isDark={isDark} {...restProps}>
			{children}
		</IconDiv>
	);
};

Project.Icon = function ProjectIcon({ ...restProps }) {
	return <Icon {...restProps} />;
};

Project.Text = function ProjectText({ isDark, children, ...restProps }) {
	return (
		<Text isDark={isDark} {...restProps}>
			{children}
		</Text>
	);
};

Project.TabContainer = function ProjectTabContainer({
	children,
	...restProps
}) {
	return <TabContainer {...restProps}>{children}</TabContainer>;
};

Project.TabItem = function ProjectTabItem({ isDark, children, ...restProps }) {
	return (
		<TabItem isDark={isDark} {...restProps}>
			{children}
		</TabItem>
	);
};

Project.ProjectsContainer = function ProjectProjectsContainer({
	children,
	...restProps
}) {
	return <ProjectsContainer {...restProps}>{children}</ProjectsContainer>;
};

Project.ProjectItem = function ProjectProjectItem({ children, ...restProps }) {
	return <ProjectItem {...restProps}>{children}</ProjectItem>;
};

Project.ProjectItemImageHoverDiv = function ProjectProjectItemImageHoverDiv({
	children,
	isHover,
	...restProps
}) {
	return (
		<ProjectItemImageHoverDiv isHover={isHover} {...restProps}>
			{children}
		</ProjectItemImageHoverDiv>
	);
};

Project.ProjectItemImageContainer = function ProjectProjectItemImageContainer({
	children,
	...restProps
}) {
	return (
		<ProjectItemImageContainer {...restProps}>
			{children}
		</ProjectItemImageContainer>
	);
};

Project.ProjectItemImage = function ProjectProjectItemImage({
	isHover,
	children,
	...restProps
}) {
	return (
		<ProjectItemImage isHover={isHover} {...restProps}>
			{children}
		</ProjectItemImage>
	);
};

Project.ProjectItemTextContainer = function ProjectProjectItemTextContainer({
	children,
	...restProps
}) {
	return (
		<ProjectItemTextContainer {...restProps}>
			{children}
		</ProjectItemTextContainer>
	);
};

Project.ProjectItemText = function ProjectProjectItemText({
	children,
	...restProps
}) {
	return <ProjectItemText {...restProps}>{children}</ProjectItemText>;
};

Project.ProjectItemSubText = function ProjectProjectItemSubText({
	children,
	...restProps
}) {
	return <ProjectItemSubText {...restProps}>{children}</ProjectItemSubText>;
};

export default Project;
