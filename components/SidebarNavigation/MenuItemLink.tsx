import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface MenuItemLinkProps {
  text: string;
  href?: string;
  onClick?: () => void
  icon?: React.ReactNode;
}

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  text-decoration: none;
`;

const IconWrapper = styled.span`
  margin-right: 12px;
`;

export const MenuItemLink: FC<MenuItemLinkProps> = ({ href, text, icon }) => {
  return (
    <ListItem>
      <Link passHref href={href || ''}>
        <Anchor>
          <IconWrapper>{icon}</IconWrapper>
          {text}
        </Anchor>
      </Link>
    </ListItem>
  );
};