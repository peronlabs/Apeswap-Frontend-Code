/** @jsxImportSource theme-ui */
import { Button, Flex, Link, Text } from '@ape.swap/uikit'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React from 'react'
import ReactPlayer from 'react-player'
import { useClaimRaffle, useFetchBabToken } from 'state/hooks'
import { styles } from '../styles'

const BabInfoCard: React.FC = () => {
  const { t } = useTranslation()
  const { tokenId } = useFetchBabToken()
  const { claim, claiming, hasClaimed } = useClaimRaffle()
  const { account } = useActiveWeb3React()

  const wonPrize = true
  const nfbNumber = 2701

  // wonPrize
  // -> Congratulations Text, New Description with NFB #number

  // wonPrize
  // -> !hasClaimed -> Claim NFB button
  // -> hasClaimed (wonPrize also true) -> Claimed button (disabled)

  return (
    <Flex sx={styles.nfb}>
      <Flex sx={styles.nfbCon}>
        <Flex sx={styles.nfbTextCon}>
          <Text sx={styles.nfbHeader}>
            {wonPrize && account ? t("Congratulations, You've Won!") : t('The 30-Day Non-Fungible Banana NFT Raffle')}
          </Text>
          <Text sx={styles.nfbDescription}>
            {wonPrize && account && (
              <Text sx={{ fontWeight: 700, margin: 0, lineHeight: 0 }}>
                {t(`NFB #${nfbNumber} should be in your wallet!`)}
                <br />
                <br />
              </Text>
            )}
            {wonPrize && account
              ? t('Thank you for joining the ApeSwap BAB Club and participating in our BAB Launch Raffle!')
              : t(
                  `From October 1st through October 31st, all holders of an ApeSwap BAB NFT will be eligible to participate in a daily raffle to win a Non Fungible Banana NFT.`,
                )}
            <br />
            <br />
            {wonPrize && account
              ? t('Look forward to more BAB token initiatives in the future.')
              : t(`Make sure to return to this page daily in October to see if you have won an NFB!`)}
          </Text>
          <Text sx={styles.nfbBottom}>
            {wonPrize && account ? (
              <>
                {hasClaimed ? (
                  <Button disabled fullWidth>
                    {t('Claimed')}
                  </Button>
                ) : (
                  <Button onClick={() => claim(tokenId)} disabled={claiming} fullWidth>
                    {t('Claim NFB')}
                  </Button>
                )}
              </>
            ) : (
              <Link
                href="https://ape-swap.medium.com/apeswap-adds-launch-support-for-binances-first-soulbound-token-dbb2e0e4c263"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                {t('Check out our Medium article to learn more >')}
              </Link>
            )}
          </Text>
        </Flex>
      </Flex>
      <Flex sx={{ width: ['240px', '414px'] }}>
        <ReactPlayer playing muted loop url="videos/bab-nfb.mp4" height="100%" width="100%" playsInline />
      </Flex>
    </Flex>
  )
}

export default React.memo(BabInfoCard)
