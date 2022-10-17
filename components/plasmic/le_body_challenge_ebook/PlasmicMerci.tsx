// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gBGqaUF3C5CQvEpDAhmCMe
// Component: CGcqI8E5JWs
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsojSgcPkSvUubm } from "../ebook/PlasmicGlobalVariant__Screen"; // plasmic-import: Oj_sgcPKSvUUBM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../ebook/plasmic_ebook.module.css"; // plasmic-import: gBGqaUF3C5CQvEpDAhmCMe/projectcss
import sty from "./PlasmicMerci.module.css"; // plasmic-import: CGcqI8E5JWs/css

import PlayingCardHeartShapesvgIcon from "../ebook/icons/PlasmicIcon__PlayingCardHeartShapesvg"; // plasmic-import: EqyKEX400BvG3m/icon
import BlackCommentsBubbleSvgrepoComsvgIcon from "../ebook/icons/PlasmicIcon__BlackCommentsBubbleSvgrepoComsvg"; // plasmic-import: O7PZi_7_tKwG4d/icon

export type PlasmicMerci__VariantMembers = {};

export type PlasmicMerci__VariantsArgs = {};
type VariantPropType = keyof PlasmicMerci__VariantsArgs;
export const PlasmicMerci__VariantProps = new Array<VariantPropType>();

export type PlasmicMerci__ArgsType = {
  validEmail?: boolean;
};

type ArgPropType = keyof PlasmicMerci__ArgsType;
export const PlasmicMerci__ArgProps = new Array<ArgPropType>("validEmail");

export type PlasmicMerci__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultMerciProps {}

function PlasmicMerci__RenderFunc(props: {
  variants: PlasmicMerci__VariantsArgs;
  args: PlasmicMerci__ArgsType;
  overrides: PlasmicMerci__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          validEmail: false
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsojSgcPkSvUubm()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicMerci.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMerci.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMerci.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___2RHD)}>
                <div className={classNames(projectcss.all, sty.freeBox__uCqPo)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__alRp)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nzMzJ)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__nzpGx
                        )}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={"LE BODY CHALLENGE" as const}
                          className={classNames(sty.img)}
                          displayHeight={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? ("150px" as const)
                              : ("150px" as const)
                          }
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"none" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"eager" as const}
                          src={{
                            src: "/plasmic/ebook/images/bodyChallengeLogopng.png",
                            fullWidth: 406,
                            fullHeight: 378,
                            aspectRatio: undefined
                          }}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__d3Ko
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__jCjkE
                            )}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link___4Q2Ty
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__moVx
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg___6Bdl5
                                  )}
                                  role={"img"}
                                />
                              ) : null}

                              <PlayingCardHeartShapesvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__lGecA
                                )}
                                role={"img"}
                              />
                            </p.PlasmicLink>

                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__bpwXj
                                )}
                              >
                                {false ? (
                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__swpRw
                                    )}
                                    role={"img"}
                                  />
                                ) : null}

                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__aw3Ho
                                  )}
                                >
                                  {"32k Likes "}
                                </div>

                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    sty.link__oD26
                                  )}
                                  component={Link}
                                  platform={"nextjs"}
                                >
                                  <BlackCommentsBubbleSvgrepoComsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__qgEDy
                                    )}
                                    role={"img"}
                                  />

                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__jrQr4
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg___4KCu
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                </p.PlasmicLink>

                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__sHuKk
                                  )}
                                >
                                  {"312 Commentaires"}
                                </div>

                                {false ? (
                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__qeNng
                                    )}
                                    role={"img"}
                                  />
                                ) : null}
                                {true ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__v4B0
                                    )}
                                  >
                                    <p.PlasmicLink
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.a,
                                        sty.link___6Genq
                                      )}
                                      component={Link}
                                      platform={"nextjs"}
                                    >
                                      {false ? (
                                        <svg
                                          className={classNames(
                                            projectcss.all,
                                            sty.svg__xRMu4
                                          )}
                                          role={"img"}
                                        />
                                      ) : null}
                                      {false ? (
                                        <svg
                                          className={classNames(
                                            projectcss.all,
                                            sty.svg__tyYIz
                                          )}
                                          role={"img"}
                                        />
                                      ) : null}

                                      <svg
                                        className={classNames(
                                          projectcss.all,
                                          sty.svg__rqoQ2
                                        )}
                                        role={"img"}
                                      />
                                    </p.PlasmicLink>
                                  </div>
                                ) : null}
                              </p.Stack>
                            ) : null}
                          </p.Stack>
                        ) : null}
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"foreground2"}
                    data-plasmic-override={overrides.foreground2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.foreground2)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__fYxx7
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nU7Rz
                          )}
                        >
                          <h1
                            data-plasmic-name={"h1"}
                            data-plasmic-override={overrides.h1}
                            className={classNames(
                              projectcss.all,
                              projectcss.h1,
                              projectcss.__wab_text,
                              sty.h1
                            )}
                          >
                            {"Merci !"}
                          </h1>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__f2SIs
                            )}
                          >
                            {
                              "Tu vas bientôt recevoir ton e-book \ndans ta boîte mail"
                            }
                          </div>
                        </p.Stack>
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gwByK)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__fcxtb)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tZNsj)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__k4D6H
                      )}
                    >
                      {"© MyCapsule. All rights reserved."}
                    </div>
                  </p.Stack>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "foreground2", "h1"],
  img: ["img"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  foreground2: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMerci__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMerci__VariantsArgs;
    args?: PlasmicMerci__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMerci__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMerci__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMerci__ArgProps,
          internalVariantPropNames: PlasmicMerci__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMerci__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMerci";
  } else {
    func.displayName = `PlasmicMerci.${nodeName}`;
  }
  return func;
}

export const PlasmicMerci = Object.assign(
  // Top-level PlasmicMerci renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicMerci
    internalVariantProps: PlasmicMerci__VariantProps,
    internalArgProps: PlasmicMerci__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Merci !",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMerci;
/* prettier-ignore-end */
